import "./Button.scss";

function Button({ href, children, className = "", target, rel, ...props }) {
  const classes = `app-button app-button--glass app-button--blue ${className}`.trim();

  return (
    <a className={classes} href={href} target={target} rel={rel} {...props}>
      {children}
    </a>
  );
}

export default Button;
