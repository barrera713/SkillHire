class Contractor < ApplicationRecord
    has_secure_password 
    # has_one_attached :profile_pic
    has_many :reviews 
    has_many :users, through: :reviews
    has_many :contractor_skills
    has_many :skills, through: :contractor_skills
    validates :username, presence: true, uniqueness: true 
    validates :email, uniqueness: true 
    validates :password, length: { in: 6..20 }

    def auth_token
        JWT.encode({ id: self.id, type: 'contractor'}, 'a;lsdkjfgh')
    end 

    def as_json(*)
        super.except('password_digest')
    end

    def profile_url
        begin
            url_for(self.profile_pic)
        rescue => error
            ""
        end
    end 
    

end
