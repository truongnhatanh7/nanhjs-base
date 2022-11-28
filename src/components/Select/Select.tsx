import React from "react"
import { styled } from "../../design/stitches.config"
import SelectIcon from "./SelectIcon"

type PrimitiveProps = React.ComponentProps<typeof Wrapper>;

interface SelectProps extends PrimitiveProps {
  items: string[]
}


export const Select: React.FC<SelectProps> = React.forwardRef<HTMLLabelElement, SelectProps>((props, ref) => {
  const [id, setId] = React.useState<string>(() => {
    return props.items.reduce(item => {
      return item
    })
  })
  const [items, setItems] = React.useState<string[]>(props.items)
  const [selectedItem, setSelectedItem] = React.useState<number>(0)
  const selectRef = React.useRef<HTMLSelectElement>(null)


  const handleSelectItem = (item: string, index: number) => {
    setSelectedItem(index);
  }

  return (
    <>
      <Wrapper
        htmlFor={"woasfd"}
        onClick={() => {
          selectRef.current?.click();
        }}
      >
        {
          items[selectedItem] + "  \u2193"
        }

        <NativeSelect
          ref={selectRef}
          onChange={() => {
            setSelectedItem(selectRef.current?.selectedIndex ?? 0)
          }}
        >
          {
            items.map((item, index) => (
              <NativeOption
                key={index}
                value={item}
              >
                {item}
              </NativeOption>
            ))
          }
        </NativeSelect>
      </Wrapper>
    </>
  )
})

const Wrapper = styled("label", {
  padding: "$x2 $x3",
  position: "relative",
  background: "$black",
  border: "1px solid $white",
  borderRadius: "$borderRadius$br",
  color: "$white",
  outline: "none",
  "&:has(> select:focus)": {
    outline: "4px solid $success"
  }
})

const StyledSelectIcon = styled(SelectIcon, {
  display: "inline-block"
})

const NativeSelect = styled("select", {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0,
  borderRadius: "$borderRadius$br",
  "&:focus label:focus": {
    outline: "4px solid $success"
  }
})

const NativeOption = styled("option", {
})

