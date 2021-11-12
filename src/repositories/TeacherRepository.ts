import { EntityRepository, Repository } from "typeorm";
import { Teacher } from "../entities/Teacher";

@EntityRepository(Teacher)
export class TeacherRepository extends Repository<Teacher> {}
