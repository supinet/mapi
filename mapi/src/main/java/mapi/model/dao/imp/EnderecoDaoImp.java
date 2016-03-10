package mapi.model.dao.imp;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import mapi.model.dao.EnderecoDao;
import mapi.model.domain.Endereco;

public class EnderecoDaoImp implements EnderecoDao {

	@PersistenceContext(unitName = "mapiPU")
	private EntityManager entityManager;

	@SuppressWarnings("unchecked")
	@Override
	public List<Endereco> getEnderecos() {
		Query query = entityManager.createQuery("from Endereco");
		return query.getResultList();
	}

	@Override
	public Endereco salvar(Endereco endereco) {
		entityManager.persist(endereco);
		return endereco;
	}

	@Override
	public void atualizar(Endereco endereco) {
		Endereco enderecoMerge = entityManager.merge(endereco);
		entityManager.persist(enderecoMerge);
	}

	@Override
	public void excluir(Endereco endereco) {
		Endereco enderecoMerge = entityManager.merge(endereco);
		entityManager.remove(enderecoMerge);
	}

	@Override
	public Endereco getEnderecoPorCodigo(String codigo) {
		return this.entityManager.createQuery("from Endereco where codigo = :codigo ", Endereco.class)
				.setParameter("codigo", codigo).getSingleResult();
	}

}
