import styles from './button.module.css'

interface ButtonProps {
  label: string
  variant?: 'primary' | 'secondary'
}

export const Button = ({ label, variant = 'primary' }: ButtonProps) => {
  return (
    <div className={`${styles.btn} ${styles[variant]}`}>
      {label}
    </div>
  )
}
