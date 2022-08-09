import React from 'react';
import { MyTextArea } from '../questions/WriteQuestion';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Formik, Form } from 'formik';
import { useMutation } from 'react-query';
import answerService from '../../services/answers.service.js';

const PostAnswer = ({ question_id, refetch }) => {
  const { business } = useParams();
  const { mutate, isLoading } = useMutation(
    (answer) => answerService.postAnswer(business, question_id, answer),
    {
      onSuccess: (response) => {
        toast.success(response.success[0]);
        document.documentElement.scrollTop = 0;
        refetch();
      },
      onError: (error) => {
        console.log(error);
      }
    }
  );

  return (
    <Formik
      initialValues={{
        answer: ''
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        mutate({
          answer: {
            answer: values.answer
          }
        });
        resetForm({ values: '' });
        setSubmitting(true);
      }}
      validationSchema={Yup.object({
        answer: Yup.string()
          .trim()
          .min(
            10,
            <p className="text-xs ml-5 text-[#e00706]">
              You’ll need to make your answer a little bit longer before we can
              post it.
            </p>
          )
          .max(
            150,
            <p className="text-xs ml-5 text-[#e00706]">
              try to minimize your answer for people to read.
            </p>
          )
          .required(
            <p className="text-xs ml-5 text-[#e00706]">
              Oops! Your answer needs to be in the form of a answer before we
              can publish it
            </p>
          )
      })}
    >
      {(formik) => (
        <Form className="">
          <MyTextArea
            name="answer"
            rows="6"
            className={
              formik.errors.answers
                ? 'border-[#e00706] border-2 hover:border-[#e00706]'
                : null
            }
          />
          {isLoading ? (
            <button
              type="submit"
              className="mr-[18px] ml-2 mt-5 bg-[#e00706] px-[16px] w-[120px] py-[7px] flex justify-center rounded text-white trasntion-all ease-in-out duration-500 font-[600]"
            >
              <div className="lds-hourglass"></div>
            </button>
          ) : (
            <button
              type="submit"
              className="mr-[18px] ml-2 mt-5 bg-[#e00706] px-[16px] py-[7px] rounded text-white trasntion-all ease-in-out duration-500 font-[600]"
            >
              Post Answer
            </button>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default PostAnswer;
