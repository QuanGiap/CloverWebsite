import styles from "./PrimaryButton.module.css"; 
interface PrimaryButtonProps {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}
export default function PrimaryButton({
    className,
    onClick,
    children,
    disabled = false,
    type = "button",
}: PrimaryButtonProps) {
    return (
        <button
            type={type}
            className={`${styles.primary_button} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );

}