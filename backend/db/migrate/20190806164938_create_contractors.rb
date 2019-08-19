class CreateContractors < ActiveRecord::Migration[5.2]
  def change
    create_table :contractors do |t|
      
      t.string :name
      t.string :username
      t.string :password_digest
      t.string :city
      t.string :state 

      t.timestamps
    end
  end
end
