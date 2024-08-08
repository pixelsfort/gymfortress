export default function Checkbox({ className = "", ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                "cursor-pointer rounded border-border text-primary shadow-sm focus:ring-primary" +
                className
            }
        />
    );
}
