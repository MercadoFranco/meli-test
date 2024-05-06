import "./styles.sass";

const Button = ({
  variant = "primary",
  fullWidth,
  children,
  disabled,
  onClick,
  className = "",
  ...rest
}) => {
  const disabledClass = disabled ? "disabled" : "";
  const fullWidthClass = fullWidth ? "fullWidth" : "";

  const handleClick = (e) => {
    e.preventDefault();
    if (disabled) {
      return;
    } else {
      onClick?.();
    }
  };

  return (
    <button
      className={`baseButton ${variant} ${disabledClass} ${fullWidthClass} ${className}`}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
