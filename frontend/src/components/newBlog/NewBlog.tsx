import axios from "axios";
import {
    ChangeEvent,
    SyntheticEvent,
    useContext,
    useEffect,
    useState,
} from "react";
import { Context } from "../../contexts/Context";
import { Button } from "../button/Button";
import { ImageFileInput } from "../inputs/imageFile/ImageFileInput";
import { SelectInput } from "../inputs/select/SelectInput";
import { TextInput } from "../inputs/text/TextInput";
import { TextAreaInput } from "../inputs/textArea/TextAreaInput";
import * as S from "./NewBlog.style";

export const NewBlog = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [selectedFile, setSelectedFile] = useState("");
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("cat behaviour");

    const { user } = useContext(Context);

    useEffect(() => {
        const fetchCategories = async () => {
            const fetchedCategories = await axios.get("/backend/categories");
            setCategories(fetchedCategories.data);
        };
        fetchCategories();
    }, []);

    const changeSelectedFile = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedFile(e.target.value);
    };

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const newPost = {
            username: user?.username,
            title,
            desc: description,
            photo: selectedFile,
            categories: selectedCategory,
        };

        if (selectedFile) {
            const data = new FormData();

            const fileName = Date.now() + selectedFile;
            data.append("name", fileName);
            data.append("file", selectedFile);
            newPost.photo = fileName;

            try {
                await axios.post("/backend/upload", data);
            } catch (err) {
                // eslint-disable-next-line no-console
                console.log(err);
            }
        }
        try {
            const res = await axios.post("/backend/posts", newPost);
            window.location.replace("/post/" + res.data._id);
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log(err);
        }
    };

    return (
        <S.Form onSubmit={handleSubmit}>
            <S.Container>
                <S.Title>New Blog</S.Title>
                <label htmlFor="fileInput" />
                <ImageFileInput
                    id="post_image"
                    accept=".jpg,.png"
                    onChange={changeSelectedFile}
                    label="Choose your background"
                    value={selectedFile}
                />
                <label htmlFor="titleInput" />
                <TextInput
                    type="text"
                    id="titleInput"
                    placeholder="Title"
                    maxLength={75}
                    value={title}
                    onChange={(e) => setTitle(e?.target.value)}
                    label="Your blog title"
                    autoFocus
                />
                <br />
                <SelectInput
                    name="select_category"
                    id="select_category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    label="Choose category"
                    items={categories.map((category: any) => {
                        return {
                            text: category.name,
                        };
                    })}
                ></SelectInput>
                <TextAreaInput
                    id="post_description"
                    label="Write something..."
                    placeholder="Your blog text"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Button color="mint-intense" size="lg" type="submit">
                    Add Blog
                </Button>
            </S.Container>
        </S.Form>
    );
};
