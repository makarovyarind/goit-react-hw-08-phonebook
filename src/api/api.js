 import axios from "axios";

 export const getContacts = async () => {
     const { data } = await axios ('https://connections-api.herokuapp.com/contacts')
    return data
  };

  export const addContact = async (contact) => {
     const { data } = await axios.post('https://connections-api.herokuapp.com/contacts', contact);
     return data;
   };

  export const deleteContact = async (contactId) => {
      const { data } = await axios.delete(`https://connections-api.herokuapp.com/contacts/${contactId}`);
      return data;
    };

  // export const registerUser = async (user) => {
  //     const { data } = await axios.post('https://connections-api.herokuapp.com/users/signup');
  //     return data; 
  //   }



