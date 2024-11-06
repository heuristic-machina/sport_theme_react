import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: '12we45tgy7u',
      label: 'Utah University',
      content: 'Index 0: Utah QB Cam Rising shines with five passing touchdowns in a blowout victory over Southern Utah. SALT LAKE CITY -- — Cam Rising made his return with a career-high five touchdown passes — three to Brant Kuithe — to power No. 12 Utah to a 49-0 win over Southern Utah on Thursday night.'
    },
    {
      id:'12qase4rfg',
      label: 'Kansas',
      content: 'Index 1: Devin Neal ran for 112 yards and two touchdowns on eight first-half carries and No. 22 Kansas beat Lindenwood 48-3 on Thursday night in the opener for both teams.'
    },
    {
      id: 'o8uhtrfe3',
      label: 'North Carolina State',
      content: 'Index 2: Behind three touchdowns from KC Concepcion and two TDs by Jordan Waters, N.C. State football prevailed against feisty FCS opponent Western Carolina with a 38-21 win at Carter-Finley Stadium in the season opener.'
    },
  ];

  return <Accordion items = {items} />;
};

  
  
export default AccordionPage;

// function myFunction(items, expandedIndex) {
//   return items.map((item, index) => {
//     if (index === expandedIndex) {
//       return 'Expanded!'
//     } else {
//       return 'Collapsed';
//     }
//   })
// }

// myFunction(propsItems, 0);

// myFunction(propsItems, 2);