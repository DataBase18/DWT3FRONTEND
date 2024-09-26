 import {API_URL} from '../core/constants.js'
 import {ErrorModel} from '../models/ErrorModel.js'
 import {UserModel} from '../models/UserModel.js'

// Servicio para login de usuario
export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "email": email, 
        "password": password
      }),
    });
    console.log(response);
    
    if (!response.ok) {
      const errorData = await response.json();
      return new ErrorModel(errorData.error || 'Error al efectuar el proceso');
    }

    const data = await response.json();
    return UserModel.fromJson(data);
  } catch (error) {
    return new ErrorModel('Ocurrio un error local al parsear la respuesta del servicio: '+error);
  }
};

/*
// Servicio para obtener los detalles de un usuario
export const getUser = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al obtener usuario');
    }

    const data = await response.json();
    return data;  // Retorna los datos del usuario
  } catch (error) {
    return { error: error.message };
  }
};

// Servicio para crear un nuevo usuario
export const createUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al crear usuario');
    }

    const data = await response.json();
    return data;  // Retorna el usuario creado o la confirmación
  } catch (error) {
    return { error: error.message };
  }
};


*/