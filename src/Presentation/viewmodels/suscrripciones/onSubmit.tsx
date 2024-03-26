import { useMantenimientoInfoPorIdViewModel } from "../mantenimientos/mantenimientViewModel";
import { useCambiarEstadoMantenimientoViewModel } from "../mantenimientos/revisionManteViewModel";

// Define una interfaz para los valores del formulario
interface FormValues {
  _id: string;
  solicitud: string;
  correciones: string;
  repuestos: any[];
  denegado: boolean;
}

export class RegistrarCalendarSolicitud {
  // Define las mutaciones de Apollo Client para cambiar el estado de un mantenimiento.
  cambiarEstadoMantenimiento = useCambiarEstadoMantenimientoViewModel();



  getMantenimientosforId(id: string) {
    return useMantenimientoInfoPorIdViewModel(id);
  }

  // Define si confirmar on cancelar correcciones
  getConfirmacion() {
    return [
      { label: "Si", value: "Si" },
      { label: "No", value: "No" },
    ];
  }

  async onSubmit(values: FormValues) {

    
    const { data } = await this.cambiarEstadoMantenimiento.cambiarEstadoMantenimiento({
      variables: {
        denegado: values.denegado,
        revision: values.solicitud === "Si" ? true : false,
        cambiarEstadoRevisionODenegadoId: values._id,
        repuestosAjuste: values.repuestos,
        cambiosSolicitados: values.correciones,
        
      },
     
    });
    return data;
  }
}