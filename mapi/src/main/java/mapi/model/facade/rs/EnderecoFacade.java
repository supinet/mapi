package mapi.model.facade.rs;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Singleton;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import mapi.model.domain.Endereco;
import mapi.model.service.EnderecoService;

@Path("/endereco")
@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
@Consumes(MediaType.APPLICATION_JSON)
@Singleton
public class EnderecoFacade {

	@Inject
	private EnderecoService enderecoService;

	@GET
	@Path("/{codigo}")
	@Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	public Endereco getEnderecoPorCodigo(@PathParam("codigo") String codigo) {
		return this.enderecoService.getEnderecoPorCodigo(codigo);
	}

	@GET
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	public List<Endereco> getEnderecos() {
		return this.enderecoService.getEnderecos();
	}

	@POST
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	public Endereco salvar(Endereco endereco) {
		return this.enderecoService.salvar(endereco);
	}

	@PUT
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	public void atualizar(Endereco endereco) {
		this.enderecoService.atualizar(endereco);
	}

	@DELETE
	@Path("/{id}")
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	public void excluir(@PathParam("id") int id) {
		Endereco endereco = new Endereco();
		endereco.setId(id);
		this.enderecoService.excluir(endereco);
	}

}
