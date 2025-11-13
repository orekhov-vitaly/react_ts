import { useFormik } from "formik";
import * as Yup from "yup";

import { EmployeeFormComponent, Title } from "./styles";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import type { EmploeeFormValues } from "./types";

function EmployeeForm() {
    const schema = Yup.object().shape({
        fullName: Yup.string()
            .required("Full name is required")
            .min(5, "Min 5 symbols")
            .max(50, "Max 50 symbols")
            .typeError("Full name must be string"),
        age: Yup.number()
            .required("Age is required")
            .test(
                "Check adult",
                "Age must be between 18 and 80",
                (value) => value >= 18 && value <= 80
            )
            .typeError("Age must be number"),
        jobTitle: Yup.string()
            .max(30, "Max 30 symbols")
            .typeError("Job title must be string"),
    });

    const formik = useFormik({
        initialValues: {
            fullName: "",
            age: "",
            jobTitle: "",
        } as EmploeeFormValues,

        validationSchema: schema,
        validateOnChange: false,

        onSubmit: (values: EmploeeFormValues): void => {
            console.log(values);
        },
    });

    return (
        <EmployeeFormComponent onSubmit={formik.handleSubmit}>
            <Title>Employee Form</Title>
            <Input
                name="fullName"
                label="Full name"
                placeholder="Enter your full name"
                value={formik.values.fullName}
                error={formik.errors.fullName}
                onChange={formik.handleChange}
            />
            <Input
                name="age"
                label="Age"
                placeholder="Enter your age"
                value={formik.values.age}
                error={formik.errors.age}
                onChange={formik.handleChange}
            />
            <Input
                name="jobTitle"
                label="Job title"
                placeholder="Enter your job title"
                value={formik.values.jobTitle}
                error={formik.errors.jobTitle}
                onChange={formik.handleChange}
            />
            <Button name="Create" type="submit" />
        </EmployeeFormComponent>
    );
}

export default EmployeeForm;
