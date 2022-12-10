import React, { SyntheticEvent, MouseEvent } from 'react';
import { styled } from "@design/stitches.config"

type PrimitiveProps = React.ComponentProps<typeof Wrapper>

type DragState = {
  x: number,
  y: number,
  allow: boolean,
  width: number,
  height: number
}

export const DragItem: React.FC<PrimitiveProps> = (props) => {
  const ref = React.createRef<HTMLDivElement>();
  const [pos, setPos] = React.useState<DragState>({
    x: 0,
    y: 0,
    allow: false,
    width: 0,
    height: 0,
  })

  // console.log("Pos: ", pos.x, pos.y, pos.width, pos.height)


  React.useLayoutEffect(() => {
    if (ref.current) {
      // console.log(ref.current.getBoundingClientRect())
      setPos({
        ...pos,
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight
      })
    }
  }, [])

  const handleMouseDown = (e: MouseEvent) => {

    if (ref.current) {
      setPos({
        ...pos,
        x: e.pageX - pos.width / 2,
        y: e.pageY - pos.height / 2,
        allow: true,
      })
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (pos.allow) {
      console.log("Mouse: ", e.pageX, e.pageY)
      setPos({
        ...pos,
        x: e.pageX - (pos.width / 2),
        y: e.pageY - pos.height / 2,
        allow: true,
      })
    }
  }

  const handleMouseUp = (e: MouseEvent) => {
    setPos({
      ...pos,
      allow: false,
    })
  }



  return (
    <Wrapper
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{
        transform: `translateX(${pos.x}px) translateY(${pos.y}px)`
      }}
    >
      <Children ref={ref}>
      {props.children}
      </Children>
    </Wrapper>
  )
}

const Wrapper = styled("div", {
  width: "fit-content",
  cursor: "pointer",
  userSelect: "none",
  display: "block",
})

const Children = styled("div", {

})

