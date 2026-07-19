import styles from './button.module.css'

interface ButtonProps {
  label: string
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'large'
}

export const Button = ({ label, variant = 'primary', size }: ButtonProps) => {
  const sizeClass = size ? styles[size] : ''

  return (
    <div className={`${styles.btn} ${styles[variant]} ${sizeClass}`}>
      {label}
    </div>
  )
}
