import React from 'react'

export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  className = '',
}) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    border: 'none',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    fontWeight: '500',
    transition: 'all 0.2s ease-in-out',
    opacity: disabled ? 0.6 : 1,
    width: fullWidth ? '100%' : 'auto',
  }

  const sizeStyles = {
    sm: { padding: '6px 12px', fontSize: '14px' },
    md: { padding: '10px 20px', fontSize: '16px' },
    lg: { padding: '14px 28px', fontSize: '18px' },
  }

  const variantStyles = {
    primary: {
      backgroundColor: '#3b82f6',
      color: '#ffffff',
      '&:hover': { backgroundColor: '#2563eb' },
    },
    secondary: {
      backgroundColor: '#6b7280',
      color: '#ffffff',
      '&:hover': { backgroundColor: '#4b5563' },
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#3b82f6',
      border: '2px solid #3b82f6',
      '&:hover': { backgroundColor: '#3b82f6', color: '#ffffff' },
    },
    ghost: {
      backgroundColor: 'transparent',
      color: '#6b7280',
      '&:hover': { backgroundColor: '#f3f4f6' },
    },
    danger: {
      backgroundColor: '#ef4444',
      color: '#ffffff',
      '&:hover': { backgroundColor: '#dc2626' },
    },
  }

  const combinedStyles = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      style={combinedStyles}
      className={className}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  )
}

