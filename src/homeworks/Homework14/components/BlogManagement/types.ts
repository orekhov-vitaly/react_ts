export interface PostData {
    authorName: string;
    authorSurname: string;
    message: string;
}

export interface PostFormValues {
    authorName: string;
    authorSurname: string;
    postText: string;
}

export interface BlogManagementContextType {
    data: PostData | undefined;
}
