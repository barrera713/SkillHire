class Skill < ApplicationRecord
    has_many :contractors, through: :contractor_skills 
end
