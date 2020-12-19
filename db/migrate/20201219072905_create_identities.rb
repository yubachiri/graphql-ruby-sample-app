class CreateIdentities < ActiveRecord::Migration[6.0]
  def change
    create_table :identities, id: :uuid do |t|
      t.string :iss, null: false
      t.string :sub, null: false
      t.references :user, type: :uuid, null: false

      t.timestamps
    end
  end
end
