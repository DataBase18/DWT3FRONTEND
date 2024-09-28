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

// Servicio para login de usuario
export const createAccount = async (name, email, dpi, password) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "name": name, 
        "email": email, 
        "dpi": dpi,
        "password": password
      }),
    }); 
    
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


*/