class StudentsController < ApplicationController
    def index
       @students = Student.all
       render json: {message: 'ok', students: @students }
    end

    def show
        @student = Student.find(params[:id])
        render json: { message: 'ok', student: @student }
    end
end
