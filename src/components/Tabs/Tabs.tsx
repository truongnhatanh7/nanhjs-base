import React, { ReactElement } from 'react';
import { TabHeader } from "./TabHeader"
import { styled } from "../../design/stitches.config"
import { Tab, TabProps } from "./Tab"


type Props = {
  children: ReactElement[]
}

export const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = React.useState(0)
  console.log(selectedTab)

  return (
    <Wrapper>
      <TabsList>
        {
          children.map((item, index) => (
            <StyledTabHeader
              key={index}
              title={item.props.title}
              index={index}
              setSelectedTab={setSelectedTab}
              currentTab={selectedTab}
            />
          ))
        }
      </TabsList>
      <TabsPanel>
        {children[selectedTab]}
      </TabsPanel>
    </Wrapper>
  )
}

const Wrapper = styled("div", {

})

const StyledTabHeader = styled(TabHeader, {

})

const TabsList = styled("ul", {
  display: "flex",
  gap: '$x1',
})

const TabsPanel = styled("div", {
  marginTop: "$x1",
  border: "1px solid $white",
  color: "white",
  borderRadius: "$borderRadius$br",
  padding: "$x2",
})