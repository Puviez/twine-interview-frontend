import React from 'react';
import { Tabs } from 'antd';
import { AttritionTab } from 'components/AttritionTab';

const { TabPane } = Tabs;

export const AttritionTimeline = () => {
  return (
    <Tabs defaultActiveKey="1" >
      <TabPane tab="Rehire Eligible"  key="1">
        <AttritionTab rehireEligible="true"/>
      </TabPane>
      <TabPane tab="Rehire Ineligible"  key="2">
        <AttritionTab rehireEligible="false"/>
      </TabPane>
      <TabPane tab="Rehire Unknown"  key="3">
        <AttritionTab rehireEligible="unknown"/>
      </TabPane>
    </Tabs>
  )
}
