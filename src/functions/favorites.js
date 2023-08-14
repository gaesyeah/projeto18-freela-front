import Swal from "sweetalert2";

export const favoriteAlert = (avaliable) => {
  if (avaliable) return;
  Swal.fire({
    title: `<span style=";font-size: 18px">Funcionalidade ainda não implementada</span>`,
    width: 320,
    confirmButtonColor: '#5dbb63',
  });
};