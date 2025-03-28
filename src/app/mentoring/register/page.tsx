"use client"
import React, { useState } from 'react';
import InputField from '@/components/inputs/inputFiled';
import Dropdown from '@/components/inputs/dropdownField';
import SelectButtonGroup from '@/components/inputs/SelectButtonGroup';
import SubmitButton from '@/components/buttons/SubmitButton';
import CancelButton from '@/components/buttons/CancelButton';
import { list } from 'postcss';

interface RegisterProps {
  onRegister: (email: string, password: string) => void;
}

const educationLeves = [{ label: 'High School', value: 'high_school' }, { label: 'Undergraduate', value: 'undergraduate' }, { label: 'Postgraduate', value: 'postgraduate' }];
const experianceLevels = [{ label: 'Beginner', value: 'beginner' }, { label: 'Intermediate', value: 'intermediate' }, { label: 'Advanced', value: 'advanced' }];
const currentJobRoles = [{ label: 'Software Engineer', value: 'software_engineer' }, { label: 'Data Scientist', value: 'data_scientist' }, { label: 'Product Manager', value: 'product_manager' }];
const currentDesignations = [{ label: 'Software Engineer', value: 'software_engineer' }, { label: 'Data Scientist', value: 'data_scientist' }, { label: 'Product Manager', value: 'product_manager' }];
const expectations1 = [{ id: 1, text: "I need to get promoted" },{ id: 2, text: "I need to change my career" }];

const Register: React.FC<RegisterProps> = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    onRegister(email, password);
  };

  return (
    <div>
      <div className="box my-4 p-4 border-1 border-muted rounded-2xl shadow-md w-full">
        <h2 className="text-2xl font-normal font-kanit mb-2">
          Education Background
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          <Dropdown
            label="Education Level"
            name="educationLevel"
            value="high_school"
            options={educationLeves}
            onChange={(e) => console.log(e.target.value)}
          />
          <Dropdown
            label="Experience Level"
            name="experienceLevel"
            value="beginner"
            options={experianceLevels}
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
      </div>

      <div className="box my-2 p-4 border-1 border-muted rounded-2xl shadow-md w-full">
        <h2 className="text-2xl font-normal font-kanit mb-2">
          Current Proffesional Background
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          <Dropdown
            label="Current Job Role"
            name="currentJobRole"
            value="software_engineer"
            options={currentJobRoles}
            onChange={(e) => console.log(e.target.value)}
          />
          <Dropdown
            label="Current Designation"
            name="currentDesignation"
            value="software_engineer"
            options={currentDesignations}
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
      </div>

      <div className="box my-4 p-4 border-1 border-muted rounded-2xl shadow-md w-full">
        <h2 className="text-2xl font-normal font-kanit mb-2">
          Expectation
        </h2>
        <SelectButtonGroup
          options={expectations1}
          onSelect={(e) => console.log(e)}
        />
        <SelectButtonGroup
          options={expectations1}
          onSelect={(e) => console.log(e)}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          <Dropdown
            label="Expected Designation"
            name="currentJobRole"
            value="software_engineer"
            options={currentJobRoles}
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
      </div>

      <div className="box my-2 p-4 border-1 border-muted rounded-2xl shadow-md w-full">
        <h2 className="text-2xl font-normal font-kanit mb-2">
          Preferences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          <Dropdown
            label="Expected Designation"
            name="currentJobRole"
            value="software_engineer"
            options={currentJobRoles}
            onChange={(e) => console.log(e.target.value)}
          />
          <Dropdown
            label="Expected Designation"
            name="currentJobRole"
            value="software_engineer"
            options={currentJobRoles}
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
      </div>

      <div className="flex my-2 py-4 w-full justify-end gap-4">
          <CancelButton onClick={()=>console.log("clicked calcel")} text="Cancel" />
          <SubmitButton onClick={()=>console.log("clicked submit")} text="Register" />
      </div>
    </div>
  );
};

export default Register;