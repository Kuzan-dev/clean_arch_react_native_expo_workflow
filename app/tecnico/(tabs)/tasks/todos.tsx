import ProgramadosPage from "@/src/Presentation/views/tecnico/Tasks/programadosPage";
import { useCalendarViewModel } from "@/src/Presentation/viewmodels/suscripciones/calendarViewModel";

export default function ScreenTodos() {
  const { TodosMantenimientosRecientes } = useCalendarViewModel();

  return <ProgramadosPage data={TodosMantenimientosRecientes} />;
}
