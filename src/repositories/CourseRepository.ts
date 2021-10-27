import { EntityRepository, Repository } from "typeorm";
import { Course } from "../entities/Course";

@EntityRepository(Course)
export class CourseRepository extends Repository<Course> {}
