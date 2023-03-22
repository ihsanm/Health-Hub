import {useEffect, useState} from "react";
import React from "react";
import axios from "axios";

interface MuscleGroupImageProps {
    muscleGroups: Array<string>
}

export default function MuscleGroupImage(props: MuscleGroupImageProps) {
    const [image, setImage] = useState("");

    const fetchImage = async() => {
        axios.get(`https://muscle-group-image-generator.p.rapidapi.com/getImage?muscleGroups=${props.muscleGroups.join(",")}`, {
            headers: {
                'X-RapidAPI-Key': 'dafe2755a1mshcf91c9677212dc0p1a457bjsnfb2e997bea5a',
                'X-RapidAPI-Host': 'muscle-group-image-generator.p.rapidapi.com',
            },
            responseType: "arraybuffer"
        }).then((response) => {
            const imageFile = new Blob([response.data]);
            const imageUrl = URL.createObjectURL(imageFile);
            setImage(imageUrl)
        });
    }

    useEffect(() => {
        fetchImage()
    }, [])

    return  <img src={image} alt={`${props.muscleGroups.join(",")}`}/>
}