import React from "react"
import { styled } from "../../design/stitches.config"
import { CheckMark } from "./CheckMark";
import * as PrimitiveCheckbox from '@radix-ui/react-checkbox'

export const CheckboxRoot = styled(PrimitiveCheckbox.Root, {
  all: 'unset',
  backgroundColor: '$black',
  width: 16,
  height: 16,
  border: "1px solid $white",
  borderRadius: "$borderRadius$br",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {

  },
  '&:focus': {
    outline: "2px solid $white",
  },
})

export const CheckboxIndicator = styled(PrimitiveCheckbox.Indicator, {
  color: "$white"
})

export const CheckIcon = styled(CheckMark, {});










