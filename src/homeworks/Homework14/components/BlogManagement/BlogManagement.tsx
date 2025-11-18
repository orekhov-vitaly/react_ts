import { createContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { BlogManagementWrapper, PostForm, ButtomWrapper } from "./styles";
import type {
    BlogManagementContextType,
    PostFormValues,
    PostData,
} from "./types";

import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Card from "../Card/Card";

export const BlogManagementContext = createContext<BlogManagementContextType>({
    data: undefined,
});

function BlogManagement() {
    const [postData, setPost] = useState<PostData | undefined>(undefined);

    const schema = Yup.object().shape({
        postText: Yup.string().trim().required("Field is required"),
    });

    const formik = useFormik({
        initialValues: {
            postText: "",
        } as PostFormValues,
        validationSchema: schema,
        validateOnChange: false,
        onSubmit: (values: PostFormValues): void => {
            const data = {
                authorName: "Vitalii",
                authorSurname: "Oriekhov",
                message: values.postText,
            };

            setPost(data);
        },
    });

    return (
        <BlogManagementContext.Provider
            value={{
                data: postData,
            }}
        >
            <BlogManagementWrapper>
                <PostForm onSubmit={formik.handleSubmit}>
                    <Input
                        id="postText"
                        name="postText"
                        label="New post"
                        value={formik.values.postText}
                        error={formik.errors.postText}
                        onChange={formik.handleChange}
                    />
                    <ButtomWrapper>
                        <Button type="submit" name="Post" />
                    </ButtomWrapper>
                </PostForm>
            </BlogManagementWrapper>
            <Card />
        </BlogManagementContext.Provider>
    );
}

export default BlogManagement;
