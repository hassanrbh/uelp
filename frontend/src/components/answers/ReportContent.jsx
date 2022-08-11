import React, { useState } from 'react';
import { useMutation } from 'react-query';
import Select from 'react-select';
import { TextField } from '@mui/material';

const reportOptions = [
  {
    value: "it dosen't answer the question asked",
    label: "it dosen't answer the question asked"
  },
  {
    value: 'it contains threats, lewdness or hate speech',
    label: 'it contains threats, lewdness or hate speech'
  },
  {
    value: 'it violates uelp standard privacy',
    label: 'it violates uelp standard privacy'
  },
  {
    value: 'it contains promotional material',
    label: 'it contains promotional material'
  }
];

const ReportContent = ({ answer }) => {
  const [reportValue, setReportValue] = useState('');
  const submitReport = (e) => {};
  const [moreDetails, setMoreDetails] = useState('');

  return (
    <div className="">
      <Select
        options={reportOptions}
        onChange={(e) => setReportValue(e.value)}
        placeholder="Why do you want to report this answer ?"
        className="text-left rounded text-black m-[5px]"
        menuPortalTarget={document.body}
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
      />
      {reportValue ? (
        <form onSubmit={(e) => submitReport(e)}>
          <TextField
            label="Please provide specific details below:"
            color="primary"
            variant={'outlined'}
            margin={'normal'}
            sx={{ width: '100%' }}
            value={moreDetails}
            onChange={(e) => setMoreDetails(e.currentTarget.value)}
            autoComplete="off"
            multiline
            minRows={3}
            maxRows={10}
            InputProps={{
              className: 'p-0 h-[100px] z-0'
            }}
          />

          <input type="submit" value="Send" />
        </form>
      ) : null}
    </div>
  );
};

export default ReportContent;
