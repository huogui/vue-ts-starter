export const buttonTypes = [
    'default',
    'primary',
    'success',
    'warning',
    'info',
    'danger',
    /**
     * @deprecated
     * Text type will be deprecated in the next major version (3.0.0)
     */
    'text',
] as const

export type D = Record<string,any>

export interface BT { 
    title: string,
    year?: number,
    desc?:D
}


