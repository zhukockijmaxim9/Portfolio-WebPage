import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

// Регистрируем именно плагин GSAP, а не наш React-компонент
gsap.registerPlugin(GSAPSplitText);

/**
 * Компонент для последовательной анимации разных блоков с разными режимами разбиения.
 *
 * props:
 * - steps: Array<{
 *     content: ReactNode,          // любой JSX
 *     splitType?: "chars"|"words"|"lines",
 *     delay?: number,              // задержка между элементами шага, мс (как у тебя раньше)
 *     from?: gsap.TweenVars,       // стартовые стили (по умолчанию { opacity: 0, y: 40 })
 *     to?: gsap.TweenVars,         // конечные стили (по умолчанию { opacity: 1, y: 0 })
 *     className?: string,          // опционально: класс для обертки шага
 *     onStepComplete?: (index)=>void // колбэк по завершении конкретного шага
 *   }>
 * - duration?: number (сек) — длительность анимации элементов внутри шага
 * - ease?: string — функция сглаживания
 * - textAlign?: CSS — выравнивание контейнера
 * - onComplete?: ()=>void — общий колбэк по завершении всей последовательности
 * - className?: string — класс корневого контейнера
 */
const SplitText = ({
  steps = [],
  duration = 0.6,
  ease = "power3.out",
  textAlign = "center",
  onComplete,
  className = "",
}) => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current || steps.length === 0) return;

    const container = containerRef.current;
    const tl = gsap.timeline({
      smoothChildTiming: true,
      onComplete: () => {
        onComplete?.();
      },
    });
    timelineRef.current = tl;

    const splitInstances = [];
    const allTargets = [];

    steps.forEach((step, index) => {
      const {
        splitType = "chars",
        delay = 100,
        from = { opacity: 0, y: 40 },
        to = { opacity: 1, y: 0 },
        onStepComplete,
      } = step;

      // Берем DOM-элемент шага
      const stepEl = container.querySelector(`[data-step="${index}"]`);
      if (!stepEl) return;

      // Для строк лучше абсолютная верстка, чтобы не прыгала высота
      const absoluteLines = splitType === "lines";
      if (absoluteLines) {
        stepEl.style.position = "relative";
      }

      // Создаем SplitText для конкретного шага
      let splitter;
      try {
        splitter = new GSAPSplitText(stepEl, {
          type: splitType, // 'chars' | 'words' | 'lines'
          absolute: absoluteLines,
          linesClass: "split-line",
        });
      } catch (err) {
        // Если что-то пошло не так с плагином, не роняем всё
        // и просто пропускаем этот шаг
        // eslint-disable-next-line no-console
        console.error("GSAP SplitText error:", err);
        return;
      }

      splitInstances.push(splitter);

      // Определяем цели
      let targets;
      switch (splitType) {
        case "lines":
          targets = splitter.lines;
          break;
        case "words":
          targets = splitter.words;
          break;
        case "chars":
        default:
          targets = splitter.chars;
      }

      if (!targets || targets.length === 0) {
        // На всякий случай чистим и выходим из шага
        splitter.revert();
        return;
      }

      // Немного производительности
      targets.forEach((t) => {
        t.style.willChange = "transform, opacity";
      });
      allTargets.push(...targets);

      // Последовательность: сначала выставляем from, затем to со stagger
      tl.set(targets, { ...from, immediateRender: false, force3D: true });
      tl.set(targets, { ...from, opacity: 0, immediateRender: true });

      tl.to(
        targets,
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000, // как у тебя было — delay в миллисекундах
          force3D: true,
          onComplete: () => {
            // Снимаем will-change у этого шага
            targets.forEach((t) => {
              t.style.willChange = "";
            });
            onStepComplete?.(index);
          },
        },
        ">" // строго после предыдущего шага
      );
    });

    // Очистка при размонтировании/перерендере
    return () => {
      try {
        tl.kill();
      } catch {}
      if (allTargets.length) {
        gsap.killTweensOf(allTargets);
      }
      splitInstances.forEach((inst) => {
        try {
          inst.revert();
        } catch {}
      });
    };
  }, [steps, duration, ease, onComplete]);

  return (
    <div
      ref={containerRef}
      className={className ? `splittext-root ${className}` : "splittext-root"}
      style={{ textAlign }}
    >
      {steps.map((step, i) => (
        <div key={i} data-step={i} className={step.className} style={{ display: "inline-block", overflow: "hidden" }}>
          {step.content}
        </div>
      ))}
    </div>
  );
};

export default SplitText;
