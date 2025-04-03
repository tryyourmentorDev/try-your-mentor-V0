"use client"
import React, { useState, useEffect  } from 'react';
import { useRouter } from "next/navigation";
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '@/store';
// import { 
//   setEmail, setPassword,
//   setEducationLevel, setExperienceLevel } from '@/store/slices/registerSlice';

import {
  setLastName,
  setFistName
} from "@/lib/features/mentor-booking/register";
import {useAppStore, useAppSelector, useAppDispatch} from "@/lib/hooks";

import InputField from '@/components/inputs/inputFiled';
import Dropdown from '@/components/inputs/dropdownField';
import SelectButtonGroup from '@/components/inputs/SelectButtonGroup';
import SubmitButton from '@/components/buttons/SubmitButton';
import CancelButton from '@/components/buttons/CancelButton';
import { list } from 'postcss';


import formConfig from "@/config/mentorBookingRegisterConfig.json";
interface RegisterProps {
  onRegister: (email: string, password: string) => void;
}

interface Form {
  educationLevel: string;
  experienceLevel: string;
  currentJobRole: string;
  currentDesignation: string;
  guidanceExpectation: string;
  careerExpectation: string;
  expectedDesignation: string;
  techStack: string;
  language: string;
}

interface MultiChoiseOption {
    id: number;
    text: string;
    value?: string;
    description?: string;
  }

const iniTialForm: Form = {
  educationLevel: "",
  experienceLevel: "",
  currentJobRole: "",
  currentDesignation: "",
  guidanceExpectation: "",
  careerExpectation: "",
  expectedDesignation: "",
  techStack: "",
  language: "",
}

const educationLeves = [{ label: 'High School', value: 'high_school' }, { label: 'Undergraduate', value: 'undergraduate' }, { label: 'Postgraduate', value: 'postgraduate' }];
const experianceLevels = [{ label: 'Beginner', value: 'beginner' }, { label: 'Intermediate', value: 'intermediate' }, { label: 'Advanced', value: 'advanced' }];
const currentJobRoles = [{ label: 'Software Engineer', value: 'software_engineer' }, { label: 'Data Scientist', value: 'data_scientist' }, { label: 'Product Manager', value: 'product_manager' }];
const currentDesignations = [{ label: 'Software Engineer', value: 'software_engineer' }, { label: 'Data Scientist', value: 'data_scientist' }, { label: 'Product Manager', value: 'product_manager' }];
const expectations1 = [{ id: 1, text: "I need to get promoted" },{ id: 2, text: "I need to change my career" }];

const Register: React.FC<RegisterProps> = ({ onRegister }) => {

  // const dispatch = useDispatch();
  // const { email, password, educationLevel, experienceLevel } = useSelector((state: RootState) => state.register);

  // const handleRegister = () => {
  //   onRegister(email, password);
  // };

  // const { firstName, lastName, educationLevel, experienceLevel } = useAppSelector((state) => state.mentorBookingRegister);
  
  
  const [form, setForm] = useState<Form>(iniTialForm);
  const [error, setError] = useState<Form>(iniTialForm);
  const router = useRouter();

  useEffect(() => {
    setForm(iniTialForm);
    setError(iniTialForm);
  }, []);

  const onchangeDropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  const onChangeMultiChoice = (selectOption: MultiChoiseOption, filedName: string) => {
    const {id, value} = selectOption;
    setForm((prevForm) => ({
      ...prevForm,
      [filedName]: value,
    }));
  }

  const onClickSubmitButton = () => {
    console.log("clicked submit button");
    console.log(form);
    router.push("/mentor-booking/mentors");
  }

  return (
    <div>
      <div className="box mb-4 p-4 border-1 border-muted rounded-2xl shadow-md w-full">
        <h2 className="text-2xl font-normal font-kanit mb-2">
          Education Background
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          <Dropdown
            label={formConfig.educationLevel.label}
            name={formConfig.educationLevel.name}
            value={form.educationLevel}
            options={formConfig.educationLevel.options}
            isRequired={formConfig.educationLevel.isRequired}
            error={error.educationLevel}
            onChange={(e) => onchangeDropdown(e)}
          />
          <Dropdown
            label={formConfig.experienceLevel.label}
            name={formConfig.experienceLevel.name}
            value={form.experienceLevel}
            options={formConfig.experienceLevel.options}
            isRequired={formConfig.experienceLevel.isRequired}
            error={error.experienceLevel}
            onChange={(e) => onchangeDropdown(e)}
            />
        </div>
      </div>

      <div className="box mb-4 p-4 border-1 border-muted rounded-2xl shadow-md w-full">
        <h2 className="text-2xl font-normal font-kanit mb-2">
          Current Proffesional Background
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          <Dropdown
            label={formConfig.currentJobRole.label}
            name={formConfig.currentJobRole.name}
            value={form.currentJobRole}
            options={formConfig.currentJobRole.options}
            isRequired={formConfig.currentJobRole.isRequired}
            error={error.currentJobRole}
            onChange={(e) => onchangeDropdown(e)}
          />
          <Dropdown
            label={formConfig.currentDesignation.label}
            name={formConfig.currentDesignation.name}
            value={form.currentDesignation}
            options={formConfig.currentDesignation.options}
            isRequired={formConfig.currentDesignation.isRequired}
            error={error.currentDesignation}
            onChange={(e) => onchangeDropdown(e)}
          />
        </div>
      </div>

      <div className="box mb-4 p-4 border-1 border-muted rounded-2xl shadow-md w-full">
        <h2 className="text-2xl font-normal font-kanit mb-2">
          Expectation
        </h2>
        <SelectButtonGroup
          options={formConfig.careerExpectation.options}
          label={formConfig.careerExpectation.label}
          isRequired={formConfig.careerExpectation.isRequired}
          onSelect={(e) => onChangeMultiChoice(e, formConfig.careerExpectation.name)}
        />
        <SelectButtonGroup
          options={formConfig.guidanceExpectation.options}
          label={formConfig.guidanceExpectation.label}
          isRequired={formConfig.guidanceExpectation.isRequired}
          onSelect={(e) => onChangeMultiChoice(e, formConfig.guidanceExpectation.name)}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <Dropdown
            label={formConfig.expectedDesignation.label}
            name={formConfig.expectedDesignation.name}
            value={form.expectedDesignation}
            options={formConfig.expectedDesignation.options}
            isRequired={formConfig.expectedDesignation.isRequired}
            error={error.expectedDesignation}
            onChange={(e) => onchangeDropdown(e)}
          />
        </div>
      </div>

      <div className="box mb-4 p-4 border-1 border-muted rounded-2xl shadow-md w-full">
        <h2 className="text-2xl font-normal font-kanit mb-2">
          Preferences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <Dropdown
            label={formConfig.techStack.label}
            name={formConfig.techStack.name}
            value={form.techStack}
            options={formConfig.techStack.options}
            isRequired={formConfig.techStack.isRequired}
            error={error.techStack}
            onChange={(e) => onchangeDropdown(e)}
          />
          <Dropdown
            label={formConfig.language.label}
            name={formConfig.language.name}
            value={form.language}
            options={formConfig.language.options}
            isRequired={formConfig.language.isRequired}
            error={error.language}
            onChange={(e) => onchangeDropdown(e)}
          />
        </div>
      </div>

      <div className="flex mb-4 w-full justify-end gap-4">
          <CancelButton onClick={()=>console.log("clicked calcel")} text="Cancel" fullWidth={false}/>
          <SubmitButton onClick={()=>onClickSubmitButton()} text="Next" fullWidth={false} />
      </div>
    </div>
  );
};

export default Register;