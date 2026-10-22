export default defineAppConfig({
  ui: {
    primary: 'r2j',
    gray: 'zinc',
    variables: {
      light: {
        background: '243 246 247',
        foreground: '16 33 42'
      },
      dark: {
        background: 'var(--color-gray-950)',
        foreground: 'var(--color-gray-200)'
      },
      header: {
        height: '4.75rem'
      }
    },
    icons: {
      dark: 'i-heroicons-moon-20-solid',
      light: 'i-heroicons-sun-20-solid',
      system: 'i-heroicons-computer-desktop-20-solid',
      search: 'i-heroicons-magnifying-glass-20-solid',
      external: 'i-heroicons-arrow-up-right-20-solid',
      chevron: 'i-heroicons-chevron-down-20-solid',
      hash: 'i-heroicons-hashtag-20-solid'
    },
    presets: {
      button: {
        primary: {
          color: 'white',
          variant: 'solid'
        },
        secondary: {
          color: 'gray',
          variant: 'ghost'
        },
        input: {
          color: 'white',
          variant: 'outline',
          ui: {
            font: '',
            color: {
              white: {
                outline: 'ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:ring-gray-300 dark:hover:ring-gray-700 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible-ring-primary-400'
              }
            }
          }
        }
      }
    },
    button: {
      rounded: 'rounded-full',
      default: {
        size: 'md',
        color: 'primary'
      },
      icon: {
        size: {
          ex: 'w-20 h-20'
        }
      },
    },
    input: {
      rounded: 'rounded-full'
    },
    header: {
      wrapper: 'bg-white/90 backdrop-blur border-b border-line',
      button: {
        base: 'lg:hidden text-ink'
      },
      links: {
        wrapper: 'gap-x-8',
        base: 'py-2 text-[15px] font-semibold transition-colors relative after:absolute after:-bottom-0.5 after:inset-x-0 after:h-0.5 after:rounded-full after:opacity-0 after:bg-r2j-600 after:transition-opacity',
        active: 'text-ink after:opacity-100',
        inactive: 'text-[#33444D] hover:text-ink'
      }
    },
    footer: {
      wrapper: 'relative bg-r2j-950 text-mist',
      top: {
        container: 'py-16'
      },
      bottom: {
        wrapper: 'border-t border-mist/20',
        container: 'py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm'
      }
    }
  }
})
