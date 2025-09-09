import React from 'react'

export function Card({ className='', children }) {
  return <div className={`bg-white rounded-2xl border shadow-sm ${className}`}>{children}</div>
}
export function CardHeader({ className='', children }) {
  return <div className={`p-4 ${className}`}>{children}</div>
}
export function CardContent({ className='', children }) {
  return <div className={`p-4 pt-0 ${className}`}>{children}</div>
}
export function CardTitle({ className='', children }) {
  return <h3 className={`font-semibold text-lg ${className}`}>{children}</h3>
}
