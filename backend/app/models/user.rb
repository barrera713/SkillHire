class User < ApplicationRecord
    has_secure_password 
    has_many :reviews 
    has_many :contractors, through: :reviews 
    validates :username, presence: true, uniqueness: true 
    validates :password, length: { in: 6..20 }

    def auth_token
        JWT.encode({ id: self.id, type: 'user'}, 'a;lsdkjfgh')
    end 

    def as_json(*)
        super.except('password_digest')
    end
    
end
