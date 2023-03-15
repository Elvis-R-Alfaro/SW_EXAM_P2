import { ObjectId } from 'mongodb';
import {IAuditable} from '../IAuditable';

export interface IEventos extends IAuditable {
    _id?: ObjectId | string;
    nombre: string;
    fecha: Date;
    hora: string;
    descripcion : string;
    ubicacion: string;
    categoria: string;
};

export const DefaultEventos: IEventos = {
    nombre: '',
    fecha: new Date(),
    hora: '',
    descripcion: '',
    ubicacion: '',
    categoria: '',
    createdAt: new Date(),
    updatedAt: new Date()
}