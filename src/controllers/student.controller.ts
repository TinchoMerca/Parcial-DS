// src/controllers/student.controller.ts

import { Request, Response } from "express";
import StudentService from "../services/student.service";

export const getFichaAlumno = async (req: Request, res: Response) => {
  const { legajo } = req.params;
  const ficha = await StudentService.getFichaAlumno(Number(legajo));

  if (req.headers.accept?.includes("application/pdf")) {
    // Generar PDF aquí
    res.setHeader("Content-Type", "application/pdf");
    return res.send(/* PDF Buffer */);
  }

  return res.json(ficha);
};

        }
    }

}