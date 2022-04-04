import { Story, Meta } from '@storybook/react';
import Card, { CardProps } from "../../../src/components/card/card";
import { FontImage } from "../../../src/images";
import * as React from "react";

export default {
  component: Card,
  title: 'Card',
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  show: true,
  img: 'https://i.playground.ru/p/gDWxARc8XwdeOYGkep8htQ.jpeg',
  fontImg: FontImage,
  flipped: true
};
