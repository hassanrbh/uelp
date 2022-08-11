import React, { useState } from 'react';
import { useMutation } from 'react-query';
import Select from 'react-select';
import reportService from '../../services/reports.service.js';
import { toast } from 'react-toastify';
import { TextField } from '@mui/material';
import { useParams } from 'react-router-dom';

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

const ReportContent = ({ answer, setSwitcher, question_id }) => {
  const [reportValue, setReportValue] = useState('');
  const { business } = useParams();
  const { mutate, isLoading } = useMutation(
    (report) =>
      reportService.report(business, question_id, answer?.answer, report),
    {
      onSuccess: (response) => {
        setReportValue('');
        toast.success(response.message);
      },
      onError: (response) => {
        toast.error(response.response.data.message);
      }
    }
  );
  const [moreDetails, setMoreDetails] = useState('');
  const submitReport = (e) => {
    e.preventDefault();

    mutate({
      reports: {
        report_content: reportValue,
        more_details: moreDetails
      }
    });
  };

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

          <div className="flex justify-end gap-4 my-3 mx-1">
            <p
              className="cursor-pointer font-medium text-lg text-[rgba(2,122,151,1)] relative top-[4px]"
              onClick={() => setSwitcher((prev) => !prev)}
            >
              Cancel
            </p>

            <input
              type="submit"
              value="Send"
              className="flex bg-[#e00706] hover:bg-[#f24a4a] ease-in-out duration-700 px-[16px] py-[7px] rounded text-white font-bold"
            />
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default ReportContent;
