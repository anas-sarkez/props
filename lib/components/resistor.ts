import { resistance } from "circuit-json"
import {
  type CommonComponentProps,
  commonComponentProps,
  lrPins,
} from "lib/common/layout"
import { expectTypesMatch } from "lib/typecheck"
import { z } from "zod"

export interface ResistorProps extends CommonComponentProps {
  resistance: number | string
  pullupFor?: string
  pullupTo?: string
  pulldownFor?: string
  pulldownTo?: string
}

export const resistorProps = commonComponentProps.extend({
  resistance,

  pullupFor: z.string().optional(),
  pullupTo: z.string().optional(),

  pulldownFor: z.string().optional(),
  pulldownTo: z.string().optional(),
})
export const resistorPins = lrPins

type InferredResistorProps = z.input<typeof resistorProps>
expectTypesMatch<ResistorProps, InferredResistorProps>(true)
