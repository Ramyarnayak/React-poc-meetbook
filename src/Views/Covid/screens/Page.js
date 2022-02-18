import { useState, useEffect } from 'react';
import React from "react"
// Libraries
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

// Components
import  Layout from './../components/marginals/Layout';
import   Table from './../components/Table';
import  SelectStateDisctrict  from './../components/SelectStateDistrict';
// Hooks
import  useTheme  from './../hooks/useTheme';
import  useInput from './../hooks/useInput';
// Assets
import StatesAndDistricts  from './../assets/statesAndDistricts';

function App({ darkMode }) {
  const [indiaState, setIndiaState] = useInput('');
  const [resourceType, setResourceType] = useInput('');
  const [rowData, setRowData] = useState([]);
  const [shareArray, setShareArray] = useState([]);

  const themeConfig = useTheme(darkMode);

  useEffect(() => {
    const payload = {
      type: resourceType,
      prefix: StatesAndDistricts?.states[indiaState]?.state.toLowerCase(),
    };

    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(payload),
    };

    const fetchData = async () => {
      try {
        const { data } = await fetch(
          'https://api.getcovidhelp.in/getData',
          requestOptions,
        ).then((res) => res.json());

        const approvedData = data
          .filter((item) => item.isApproved)
          .map((item) => ({
            ...item,
            // eslint-disable-next-line max-len
            contact: `${item.info.name} <br/> <a href=tel:${item.info.contact}>${item.info.contact}</a> <br/> ${item.info.location}`,
            info: item.info.description,
            isSelected: 0,
          }));

        setRowData(approvedData);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };

    if (parseInt(indiaState, 10) >= 0 && parseInt(resourceType, 10) >= 0) {
      setRowData(null);
      fetchData();
    }
  }, [indiaState, resourceType]);

  const classes = useStyles();
  return (
    <Layout enableFab shareArray={shareArray}>
      <ThemeProvider theme={themeConfig}>
        <div className={`container ${classes.screen}`}>
          <header style={{ textAlign: 'center' }}>
            <h5 style={{ margin: '2%' }}>
              A consolidated list of resources to aid in combating COVID-19 in
              India. To know more, visit the <a href='/about'>About Section</a>
            </h5>
          </header>

          <SelectStateDisctrict
            {...{
              indiaState,
              setIndiaState,
              resourceType,
              setResourceType,
              showDistrict: false,
            }}
          />

          <Table
            {...{
              darkMode,
              rowData,
              setShareArray,
            }}
          />
        </div>
      </ThemeProvider>
    </Layout>
  );
}

export default App;

const useStyles = makeStyles(() => ({
  screen: {
    minHeight: '40rem',
    width: '85%',
    marginLeft: '10%',
    marginTop: '2%',
    marginBottom: '5%',
    marginRight: '3%',
  },
}));
