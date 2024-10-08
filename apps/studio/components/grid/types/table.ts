import { GridForeignKey } from './base'
import type { Dictionary } from 'types'

export interface SupaColumn {
  readonly dataType: string
  readonly format: string
  readonly name: string
  readonly comment?: string | null
  readonly defaultValue?: string | null
  readonly enum?: string[] | null
  readonly isPrimaryKey?: boolean
  readonly isIdentity?: boolean
  readonly isGeneratable?: boolean
  readonly isNullable?: boolean
  readonly isUpdatable?: boolean
  readonly isEncrypted?: boolean
  readonly foreignKey?: GridForeignKey
  position: number
}

export interface SupaTable {
  readonly id: number
  readonly columns: SupaColumn[]
  readonly name: string
  readonly schema?: string | null
  readonly comment?: string | null
  readonly estimateRowCount: number
}

export interface SupaRow extends Dictionary<any> {
  readonly idx: number
}
