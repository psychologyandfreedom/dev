import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import {AccomplishmentData} from '../../constants/constants'

// const data = [
//   { number: 20, text: 'Open Source Projects'},
//   { number: 1000, text: 'Students', },
//   { number: 1900, text: 'Github Followers', },
//   { number: 5000, text: 'Github Stars', }
// ];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {AccomplishmentData.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.year}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
