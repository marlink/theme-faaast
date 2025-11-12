'use client'

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export interface LogoConfig {
  type: 'text' | 'image'
  text?: string
  imageUrl?: string
  altText?: string
}

interface LogoContextType {
  logo: LogoConfig
  setLogo: (logo: LogoConfig) => void
  updateLogo: (updates: Partial<LogoConfig>) => void
  resetLogo: () => void
}

const defaultLogo: LogoConfig = {
  type: 'text',
  text: 'BeautifulRims',
  altText: 'BeautifulRims Logo'
}

const LogoContext = createContext<LogoContextType | undefined>(undefined)

interface LogoProviderProps {
  children: ReactNode
  initialLogo?: LogoConfig
}

export function LogoProvider({ children, initialLogo = defaultLogo }: LogoProviderProps) {
  const [logo, setLogo] = useState<LogoConfig>(initialLogo)

  // Load logo from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('website-logo')
      if (stored) {
        const parsedLogo = JSON.parse(stored)
        setLogo(parsedLogo)
      }
    } catch (err) {
      console.warn('Failed to load stored logo:', err)
    }
  }, [])

  // Save logo to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem('website-logo', JSON.stringify(logo))
    } catch (err) {
      console.warn('Failed to save logo:', err)
    }
  }, [logo])

  const updateLogo = (updates: Partial<LogoConfig>) => {
    setLogo(prev => ({
      ...prev,
      ...updates
    }))
  }

  const resetLogo = () => {
    setLogo(defaultLogo)
  }

  const value: LogoContextType = {
    logo,
    setLogo,
    updateLogo,
    resetLogo
  }

  return (
    <LogoContext.Provider value={value}>
      {children}
    </LogoContext.Provider>
  )
}

export function useLogo(): LogoContextType {
  const context = useContext(LogoContext)
  if (context === undefined) {
    throw new Error('useLogo must be used within a LogoProvider')
  }
  return context
}
