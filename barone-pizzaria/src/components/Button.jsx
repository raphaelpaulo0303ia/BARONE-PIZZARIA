import React from 'react'

export function Button({ className='', variant='default', size='md', children, ...props }) {
  const base = 'inline-flex items-center justify-center font-medium transition rounded-full disabled:opacity-50 disabled:cursor-not-allowed'
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-5 py-3 text-base',
    icon: 'p-2'
  }
  const variants = {
    default: 'bg-[#E53935] text-white hover:opacity-90',
    outline: 'border border-neutral-300 bg-white hover:bg-neutral-50',
    ghost: 'bg-transparent hover:bg-neutral-100'
  }
  return <button className={`${base} ${sizes[size]||sizes.md} ${variants[variant]||variants.default} ${className}`} {...props}>{children}</button>
}
