class CreateContractors < ActiveRecord::Migration[5.2]
  def change
    create_table :contractors do |t|
      t.string :name
      t.string :username
      t.string :password_digest
      t.string :location 
      t.string :language

      t.timestamps
    end
  end
end
