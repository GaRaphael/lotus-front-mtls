"use client";
import React, { useState } from 'react';
import Input from '../../bootstrap/forms/Input';
import { useFormik } from 'formik';
import Label from '../../bootstrap/forms/Label';
import { SketchPicker } from 'react-color';
import { Button } from "@/components/ui/button"
import api from '../../../../api/api';
import Textarea from '@/components/bootstrap/forms/Textarea';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"



export const ModalProductCasual: React.FC = () => {

    const [imageString, setImageString] = useState<string>('');

    const formik = useFormik({
        initialValues: {
            image: '',
            model: '',
            price: '',
            size: '',
            color: '',
            composition: '',
            description: '',
        },

        onSubmit: async (values) => {
            const data = {
                model: values.model,
                image: imageString,
                price: parseFloat(values.price),
                size: values.size,
                color: values.color,
                composition: values.composition,
                description: values.description,
            };

            try {
                await api.post('/suit', data);

                window.location.reload();
                window.alert('Produto cadastrado com sucesso!');

            } catch (error) {
                console.log(error);

                window.alert('Erro ao cadastrar produto!');
            }
        },
    });

    const convertImageToString = (file: File) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result = reader.result as string;
            setImageString(result);
        };
    };



    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" style={{ backgroundColor: 'black', color: "white" }}>Cadastrar produto</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Cadastrar produto</DialogTitle>
                </DialogHeader>
                <form onSubmit={formik.handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="image" className="text-right">
                                Imagem
                            </Label>
                            <Input
                                style={{
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                }}
                                type="file"
                                id="image"
                                className="col-span-3"
                                accept="image/*"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const file = e.currentTarget.files ? e.currentTarget.files[0] : null;
                                    if (file) {
                                        convertImageToString(file);
                                    }
                                }}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="model" className="text-right">
                                Modelo
                            </Label>
                            <Input
                                style={{
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                }}
                                id="model"
                                onChange={formik.handleChange}
                                value={formik.values.model}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="color" className="text-right"
                            >
                                Cor
                            </Label>
                            <SketchPicker
                                color={formik.values.color}
                                onChange={(color: any) => formik.setFieldValue('color', color.hex)}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="price" className="text-right">
                                Preço
                            </Label>
                            <Input
                                style={{
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                }}
                                id="price"
                                className="col-span-3"
                                value={formik.values.price}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="size" className="text-right">
                                Tamanho
                            </Label>
                            <Input
                                style={{
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                }}
                                id="size"
                                className="col-span-3"
                                value={formik.values.size}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="composition" className="text-right">
                                Composição
                            </Label>
                            <Input
                                style={{
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                }}
                                id="composition"
                                className="col-span-3"
                                value={formik.values.composition}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Descrição
                            </Label>
                            <Textarea
                                style={{
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                }}
                                id="description"
                                className="col-span-3"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Cadastrar</Button>
                    </DialogFooter>
                </form>
            </DialogContent>

        </Dialog>

    );
};

export default ModalProductCasual;
